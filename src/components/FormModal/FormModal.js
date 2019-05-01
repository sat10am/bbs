import React from 'react';
import styles from './FormModal.module.scss';

export default ({modal, handlemodalChange, formData, onChangeForm, onSubmitForm}) => {
    return modal ? (
        <div className={styles.modalContainer}>
            <div className={styles.modalInner}>
                <div className={styles.formContainer}>
                    <button className={styles.closeBtn} onClick={handlemodalChange}>x</button>
                    <form className={styles.form}>
                        <div className={styles.formColumn}>
                        <label>
                            <p className={styles.labelTitle}>Title</p>
                            <input type="text" name="title" value={formData.title} onChange={onChangeForm}/>
                        </label>
                        </div>
                        <div className={styles.formColumn}>
                        <label>
                            <p className={styles.labelTitle}>imageUrl</p>
                            <input type="text" name="imageUrl" vlaue={formData.imageUrl} onChange={onChangeForm}/>
                        </label>
                        </div>
                        <div className={styles.formColumn}>
                        <label>
                            <p className={styles.labelTitle}>slideUrl</p>
                            <input type="text" name="slideUrl" value={formData.slideUrl} onChange={onChangeForm}/>
                        </label>
                        </div>
                        <div className={styles.formColumn}>
                        <label>
                            <p className={styles.labelTitle}>description</p>
                            <input type="text" name="description" value={formData.description} onChange={onChangeForm}/>
                        </label>
                        </div>
                        <div className={styles.formColumn}>
                            <input type="button" className={styles.btnSubmit} value="Submit" onClick={onSubmitForm} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : (
    <div className={styles.modalButton}>
        <button className={styles.modalBtn} onClick={handlemodalChange}>+</button>
    </div>
    );
} 
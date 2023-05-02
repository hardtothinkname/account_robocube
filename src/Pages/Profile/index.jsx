import React from 'react'
import { Form } from 'react-bootstrap'
import CopyRightFooter from '../../Components/CopyRightFooter'
import style from '../../shared/style'

const Profile = () => {
    return (
        <div id="page-content-wrapper">

            <div class="h-min-100">

                <div class="container-fluid py-2">
                    <div class="row">
                        <div class="col-6 my-auto">
                            <h4 class="py-2 mb-0 font-weight-bold">Profile</h4>
                        </div>
                    </div>
                </div>

                <div class="container-fluid h-min-100" style={style['h-min-100']}>


                    <form method="post">

                        <div class="row">
                            <div class="col-md-6">

                                <div class="form-group row">
                                    <label class="col-form-label col-md-3">Phone</label>
                                    <div class="col-md-9">
                                        <Form.Control type="email" class="form-control" name="username" value="60183758138" disabled=""/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-form-label col-md-3">Email</label>
                                    <div class="col-md-9">
                                        <Form.Control type="email" class="form-control" name="email" value="hanyikoh@gmail.com" disabled=""/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-form-label col-md-3 text-danger">Name</label>
                                    <div class="col-md-9">
                                        <Form.Control type="text" class="form-control" name="nickname" value="hanyikoh" required=""/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-form-label col-md-3">New Password</label>
                                    <div class="col-md-9">
                                        <Form.Control type="password" class="form-control" name="password" placeholder="Set new password"/>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-9 offset-md-3">
                                        <button type="submit" name="save" class="btn btn-primary">Save</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>

            </div>


            <CopyRightFooter/>
        </div>
    )
}

export default Profile

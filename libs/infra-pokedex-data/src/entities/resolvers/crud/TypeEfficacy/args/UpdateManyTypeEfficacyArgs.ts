import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeEfficacyUpdateManyMutationInput } from "../../../inputs/TypeEfficacyUpdateManyMutationInput";
import { TypeEfficacyWhereInput } from "../../../inputs/TypeEfficacyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTypeEfficacyArgs {
  @TypeGraphQL.Field(_type => TypeEfficacyUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeEfficacyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TypeEfficacyWhereInput, {
    nullable: true
  })
  where?: TypeEfficacyWhereInput | undefined;
}

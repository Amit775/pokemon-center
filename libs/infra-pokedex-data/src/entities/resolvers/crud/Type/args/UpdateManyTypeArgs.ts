import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeUpdateManyMutationInput } from "../../../inputs/TypeUpdateManyMutationInput";
import { TypeWhereInput } from "../../../inputs/TypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTypeArgs {
  @TypeGraphQL.Field(_type => TypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}

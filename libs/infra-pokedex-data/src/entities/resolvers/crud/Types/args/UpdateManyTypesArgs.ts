import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesUpdateManyMutationInput } from "../../../inputs/TypesUpdateManyMutationInput";
import { TypesWhereInput } from "../../../inputs/TypesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTypesArgs {
  @TypeGraphQL.Field(_type => TypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}

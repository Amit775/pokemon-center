import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesCreateInput } from "../../../inputs/TypesCreateInput";
import { TypesUpdateInput } from "../../../inputs/TypesUpdateInput";
import { TypesWhereUniqueInput } from "../../../inputs/TypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTypesArgs {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateInput, {
    nullable: false
  })
  create!: TypesCreateInput;

  @TypeGraphQL.Field(_type => TypesUpdateInput, {
    nullable: false
  })
  update!: TypesUpdateInput;
}

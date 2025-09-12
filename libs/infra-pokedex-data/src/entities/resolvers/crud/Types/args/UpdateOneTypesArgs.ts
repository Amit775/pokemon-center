import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypesUpdateInput } from "../../../inputs/TypesUpdateInput";
import { TypesWhereUniqueInput } from "../../../inputs/TypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTypesArgs {
  @TypeGraphQL.Field(_type => TypesUpdateInput, {
    nullable: false
  })
  data!: TypesUpdateInput;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;
}

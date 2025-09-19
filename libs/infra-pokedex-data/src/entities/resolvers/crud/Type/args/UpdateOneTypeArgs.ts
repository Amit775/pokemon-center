import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeUpdateInput } from "../../../inputs/TypeUpdateInput";
import { TypeWhereUniqueInput } from "../../../inputs/TypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTypeArgs {
  @TypeGraphQL.Field(_type => TypeUpdateInput, {
    nullable: false
  })
  data!: TypeUpdateInput;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;
}

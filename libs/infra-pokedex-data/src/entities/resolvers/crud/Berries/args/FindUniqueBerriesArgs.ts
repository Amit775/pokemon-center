import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesWhereUniqueInput } from "../../../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;
}

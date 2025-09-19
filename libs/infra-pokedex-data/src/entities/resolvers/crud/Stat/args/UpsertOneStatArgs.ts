import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatCreateInput } from "../../../inputs/StatCreateInput";
import { StatUpdateInput } from "../../../inputs/StatUpdateInput";
import { StatWhereUniqueInput } from "../../../inputs/StatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneStatArgs {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatCreateInput, {
    nullable: false
  })
  create!: StatCreateInput;

  @TypeGraphQL.Field(_type => StatUpdateInput, {
    nullable: false
  })
  update!: StatUpdateInput;
}

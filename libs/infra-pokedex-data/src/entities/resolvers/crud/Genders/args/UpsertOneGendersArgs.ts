import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersCreateInput } from "../../../inputs/GendersCreateInput";
import { GendersUpdateInput } from "../../../inputs/GendersUpdateInput";
import { GendersWhereUniqueInput } from "../../../inputs/GendersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGendersArgs {
  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: false
  })
  where!: GendersWhereUniqueInput;

  @TypeGraphQL.Field(_type => GendersCreateInput, {
    nullable: false
  })
  create!: GendersCreateInput;

  @TypeGraphQL.Field(_type => GendersUpdateInput, {
    nullable: false
  })
  update!: GendersUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsCreateInput } from "../../../inputs/PokedexVersionGroupsCreateInput";
import { PokedexVersionGroupsUpdateInput } from "../../../inputs/PokedexVersionGroupsUpdateInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../../../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateInput, {
    nullable: false
  })
  create!: PokedexVersionGroupsCreateInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateInput, {
    nullable: false
  })
  update!: PokedexVersionGroupsUpdateInput;
}

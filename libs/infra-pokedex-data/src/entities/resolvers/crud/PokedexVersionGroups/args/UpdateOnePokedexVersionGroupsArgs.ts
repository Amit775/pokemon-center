import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsUpdateInput } from "../../../inputs/PokedexVersionGroupsUpdateInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../../../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsUpdateInput, {
    nullable: false
  })
  data!: PokedexVersionGroupsUpdateInput;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupsWhereUniqueInput;
}

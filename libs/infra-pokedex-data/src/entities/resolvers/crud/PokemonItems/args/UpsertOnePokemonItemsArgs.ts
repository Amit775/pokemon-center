import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsCreateInput } from "../../../inputs/PokemonItemsCreateInput";
import { PokemonItemsUpdateInput } from "../../../inputs/PokemonItemsUpdateInput";
import { PokemonItemsWhereUniqueInput } from "../../../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsCreateInput, {
    nullable: false
  })
  create!: PokemonItemsCreateInput;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateInput, {
    nullable: false
  })
  update!: PokemonItemsUpdateInput;
}

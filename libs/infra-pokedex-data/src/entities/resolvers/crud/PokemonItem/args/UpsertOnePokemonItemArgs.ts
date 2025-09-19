import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemCreateInput } from "../../../inputs/PokemonItemCreateInput";
import { PokemonItemUpdateInput } from "../../../inputs/PokemonItemUpdateInput";
import { PokemonItemWhereUniqueInput } from "../../../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonItemArgs {
  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemCreateInput, {
    nullable: false
  })
  create!: PokemonItemCreateInput;

  @TypeGraphQL.Field(_type => PokemonItemUpdateInput, {
    nullable: false
  })
  update!: PokemonItemUpdateInput;
}

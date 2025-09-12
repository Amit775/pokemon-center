import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsCreateManyInput } from "../../../inputs/PokemonHabitatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonHabitatsArgs {
  @TypeGraphQL.Field(_type => [PokemonHabitatsCreateManyInput], {
    nullable: false
  })
  data!: PokemonHabitatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

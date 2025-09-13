import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatsOrderByWithRelationInput } from "../../../inputs/PokemonHabitatsOrderByWithRelationInput";
import { PokemonHabitatsWhereInput } from "../../../inputs/PokemonHabitatsWhereInput";
import { PokemonHabitatsWhereUniqueInput } from "../../../inputs/PokemonHabitatsWhereUniqueInput";
import { PokemonHabitatsScalarFieldEnum } from "../../../../enums/PokemonHabitatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonHabitatsOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonHabitatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonHabitatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonHabitatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}

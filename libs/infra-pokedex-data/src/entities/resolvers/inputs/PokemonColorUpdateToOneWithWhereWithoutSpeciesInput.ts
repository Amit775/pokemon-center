import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorUpdateWithoutSpeciesInput } from "../inputs/PokemonColorUpdateWithoutSpeciesInput";
import { PokemonColorWhereInput } from "../inputs/PokemonColorWhereInput";

@TypeGraphQL.InputType("PokemonColorUpdateToOneWithWhereWithoutSpeciesInput", {})
export class PokemonColorUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  where?: PokemonColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonColorUpdateWithoutSpeciesInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutPokemonSpeciesInput } from "../inputs/GenerationsUpdateWithoutPokemonSpeciesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput", {})
export class GenerationsUpdateToOneWithWhereWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutPokemonSpeciesInput;
}

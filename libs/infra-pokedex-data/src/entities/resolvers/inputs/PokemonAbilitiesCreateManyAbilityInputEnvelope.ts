import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateManyAbilityInput } from "../inputs/PokemonAbilitiesCreateManyAbilityInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateManyAbilityInputEnvelope", {})
export class PokemonAbilitiesCreateManyAbilityInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateManyAbilityInput], {
    nullable: false
  })
  data!: PokemonAbilitiesCreateManyAbilityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

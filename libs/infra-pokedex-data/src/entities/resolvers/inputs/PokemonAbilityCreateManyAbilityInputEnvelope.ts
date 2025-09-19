import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateManyAbilityInput } from "../inputs/PokemonAbilityCreateManyAbilityInput";

@TypeGraphQL.InputType("PokemonAbilityCreateManyAbilityInputEnvelope", {})
export class PokemonAbilityCreateManyAbilityInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateManyAbilityInput], {
    nullable: false
  })
  data!: PokemonAbilityCreateManyAbilityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

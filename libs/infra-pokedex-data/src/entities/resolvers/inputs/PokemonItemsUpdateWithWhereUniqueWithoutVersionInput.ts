import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsUpdateWithoutVersionInput } from "../inputs/PokemonItemsUpdateWithoutVersionInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpdateWithWhereUniqueWithoutVersionInput", {})
export class PokemonItemsUpdateWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateWithoutVersionInput, {
    nullable: false
  })
  data!: PokemonItemsUpdateWithoutVersionInput;
}

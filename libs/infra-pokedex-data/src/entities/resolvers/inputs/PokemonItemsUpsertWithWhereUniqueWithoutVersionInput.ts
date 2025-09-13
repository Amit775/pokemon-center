import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonItemsCreateWithoutVersionInput } from "../inputs/PokemonItemsCreateWithoutVersionInput";
import { PokemonItemsUpdateWithoutVersionInput } from "../inputs/PokemonItemsUpdateWithoutVersionInput";
import { PokemonItemsWhereUniqueInput } from "../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonItemsUpsertWithWhereUniqueWithoutVersionInput", {})
export class PokemonItemsUpsertWithWhereUniqueWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateWithoutVersionInput, {
    nullable: false
  })
  update!: PokemonItemsUpdateWithoutVersionInput;

  @TypeGraphQL.Field(_type => PokemonItemsCreateWithoutVersionInput, {
    nullable: false
  })
  create!: PokemonItemsCreateWithoutVersionInput;
}

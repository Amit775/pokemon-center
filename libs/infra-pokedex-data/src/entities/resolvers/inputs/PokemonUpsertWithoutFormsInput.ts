import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutFormsInput } from "../inputs/PokemonCreateWithoutFormsInput";
import { PokemonUpdateWithoutFormsInput } from "../inputs/PokemonUpdateWithoutFormsInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutFormsInput", {})
export class PokemonUpsertWithoutFormsInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutFormsInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutFormsInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutFormsInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutFormsInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}

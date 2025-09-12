import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateWithoutGenerationsInput } from "../inputs/PokemonFormsCreateWithoutGenerationsInput";
import { PokemonFormsUpdateWithoutGenerationsInput } from "../inputs/PokemonFormsUpdateWithoutGenerationsInput";
import { PokemonFormsWhereInput } from "../inputs/PokemonFormsWhereInput";

@TypeGraphQL.InputType("PokemonFormsUpsertWithoutGenerationsInput", {})
export class PokemonFormsUpsertWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutGenerationsInput, {
    nullable: false
  })
  update!: PokemonFormsUpdateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: PokemonFormsCreateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;
}

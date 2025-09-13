import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsUpdateWithoutGenerationsInput } from "../inputs/PokemonFormsUpdateWithoutGenerationsInput";
import { PokemonFormsWhereInput } from "../inputs/PokemonFormsWhereInput";

@TypeGraphQL.InputType("PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput", {})
export class PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateWithoutGenerationsInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateWithoutGenerationsInput;
}

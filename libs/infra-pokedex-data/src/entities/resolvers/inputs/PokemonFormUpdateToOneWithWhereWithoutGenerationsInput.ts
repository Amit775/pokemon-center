import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormUpdateWithoutGenerationsInput } from "../inputs/PokemonFormUpdateWithoutGenerationsInput";
import { PokemonFormWhereInput } from "../inputs/PokemonFormWhereInput";

@TypeGraphQL.InputType("PokemonFormUpdateToOneWithWhereWithoutGenerationsInput", {})
export class PokemonFormUpdateToOneWithWhereWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutGenerationsInput, {
    nullable: false
  })
  data!: PokemonFormUpdateWithoutGenerationsInput;
}

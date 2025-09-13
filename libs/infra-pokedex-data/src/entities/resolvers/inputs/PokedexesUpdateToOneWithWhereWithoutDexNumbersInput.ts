import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateWithoutDexNumbersInput } from "../inputs/PokedexesUpdateWithoutDexNumbersInput";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";

@TypeGraphQL.InputType("PokedexesUpdateToOneWithWhereWithoutDexNumbersInput", {})
export class PokedexesUpdateToOneWithWhereWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateWithoutDexNumbersInput, {
    nullable: false
  })
  data!: PokedexesUpdateWithoutDexNumbersInput;
}

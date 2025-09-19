import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateWithoutDexNumbersInput } from "../inputs/PokedexUpdateWithoutDexNumbersInput";
import { PokedexWhereInput } from "../inputs/PokedexWhereInput";

@TypeGraphQL.InputType("PokedexUpdateToOneWithWhereWithoutDexNumbersInput", {})
export class PokedexUpdateToOneWithWhereWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpdateWithoutDexNumbersInput, {
    nullable: false
  })
  data!: PokedexUpdateWithoutDexNumbersInput;
}

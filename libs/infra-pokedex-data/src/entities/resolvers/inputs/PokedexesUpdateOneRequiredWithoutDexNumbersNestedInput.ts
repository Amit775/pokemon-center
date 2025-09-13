import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateOrConnectWithoutDexNumbersInput } from "../inputs/PokedexesCreateOrConnectWithoutDexNumbersInput";
import { PokedexesCreateWithoutDexNumbersInput } from "../inputs/PokedexesCreateWithoutDexNumbersInput";
import { PokedexesUpdateToOneWithWhereWithoutDexNumbersInput } from "../inputs/PokedexesUpdateToOneWithWhereWithoutDexNumbersInput";
import { PokedexesUpsertWithoutDexNumbersInput } from "../inputs/PokedexesUpsertWithoutDexNumbersInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput", {})
export class PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput {
  @TypeGraphQL.Field(_type => PokedexesCreateWithoutDexNumbersInput, {
    nullable: true
  })
  create?: PokedexesCreateWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesCreateOrConnectWithoutDexNumbersInput, {
    nullable: true
  })
  connectOrCreate?: PokedexesCreateOrConnectWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpsertWithoutDexNumbersInput, {
    nullable: true
  })
  upsert?: PokedexesUpsertWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateToOneWithWhereWithoutDexNumbersInput, {
    nullable: true
  })
  update?: PokedexesUpdateToOneWithWhereWithoutDexNumbersInput | undefined;
}

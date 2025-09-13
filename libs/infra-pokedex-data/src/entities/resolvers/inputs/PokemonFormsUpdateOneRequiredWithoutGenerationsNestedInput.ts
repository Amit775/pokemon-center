import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsCreateOrConnectWithoutGenerationsInput } from "../inputs/PokemonFormsCreateOrConnectWithoutGenerationsInput";
import { PokemonFormsCreateWithoutGenerationsInput } from "../inputs/PokemonFormsCreateWithoutGenerationsInput";
import { PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput } from "../inputs/PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput";
import { PokemonFormsUpsertWithoutGenerationsInput } from "../inputs/PokemonFormsUpsertWithoutGenerationsInput";
import { PokemonFormsWhereUniqueInput } from "../inputs/PokemonFormsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput", {})
export class PokemonFormsUpdateOneRequiredWithoutGenerationsNestedInput {
  @TypeGraphQL.Field(_type => PokemonFormsCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: PokemonFormsCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormsCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpsertWithoutGenerationsInput, {
    nullable: true
  })
  upsert?: PokemonFormsUpsertWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput, {
    nullable: true
  })
  update?: PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput | undefined;
}

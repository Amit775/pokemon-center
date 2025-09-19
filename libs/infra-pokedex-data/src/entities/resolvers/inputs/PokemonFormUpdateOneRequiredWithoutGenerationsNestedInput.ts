import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateOrConnectWithoutGenerationsInput } from "../inputs/PokemonFormCreateOrConnectWithoutGenerationsInput";
import { PokemonFormCreateWithoutGenerationsInput } from "../inputs/PokemonFormCreateWithoutGenerationsInput";
import { PokemonFormUpdateToOneWithWhereWithoutGenerationsInput } from "../inputs/PokemonFormUpdateToOneWithWhereWithoutGenerationsInput";
import { PokemonFormUpsertWithoutGenerationsInput } from "../inputs/PokemonFormUpsertWithoutGenerationsInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput", {})
export class PokemonFormUpdateOneRequiredWithoutGenerationsNestedInput {
  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: PokemonFormCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpsertWithoutGenerationsInput, {
    nullable: true
  })
  upsert?: PokemonFormUpsertWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateToOneWithWhereWithoutGenerationsInput, {
    nullable: true
  })
  update?: PokemonFormUpdateToOneWithWhereWithoutGenerationsInput | undefined;
}

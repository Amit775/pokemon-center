import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodCreateOrConnectWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodCreateOrConnectWithoutVersionGroupsInput";
import { PokemonMoveMethodCreateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodCreateWithoutVersionGroupsInput";
import { PokemonMoveMethodUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodUpdateToOneWithWhereWithoutVersionGroupsInput";
import { PokemonMoveMethodUpsertWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodUpsertWithoutVersionGroupsInput";
import { PokemonMoveMethodWhereUniqueInput } from "../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class PokemonMoveMethodUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: PokemonMoveMethodCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMoveMethodCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: PokemonMoveMethodUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMoveMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: PokemonMoveMethodUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}

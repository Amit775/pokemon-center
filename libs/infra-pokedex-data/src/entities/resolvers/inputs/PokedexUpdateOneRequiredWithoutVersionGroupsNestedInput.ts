import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateOrConnectWithoutVersionGroupsInput } from "../inputs/PokedexCreateOrConnectWithoutVersionGroupsInput";
import { PokedexCreateWithoutVersionGroupsInput } from "../inputs/PokedexCreateWithoutVersionGroupsInput";
import { PokedexUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/PokedexUpdateToOneWithWhereWithoutVersionGroupsInput";
import { PokedexUpsertWithoutVersionGroupsInput } from "../inputs/PokedexUpsertWithoutVersionGroupsInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class PokedexUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => PokedexCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: PokedexCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokedexCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: PokedexUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: PokedexUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}

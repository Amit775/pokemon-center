import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutFlagMapInput } from "../inputs/MovesCreateOrConnectWithoutFlagMapInput";
import { MovesCreateWithoutFlagMapInput } from "../inputs/MovesCreateWithoutFlagMapInput";
import { MovesUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/MovesUpdateToOneWithWhereWithoutFlagMapInput";
import { MovesUpsertWithoutFlagMapInput } from "../inputs/MovesUpsertWithoutFlagMapInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class MovesUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MovesCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: MovesUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: MovesUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}

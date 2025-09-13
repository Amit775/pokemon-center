import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsCreateOrConnectWithoutFlagMapInput } from "../inputs/MoveFlagsCreateOrConnectWithoutFlagMapInput";
import { MoveFlagsCreateWithoutFlagMapInput } from "../inputs/MoveFlagsCreateWithoutFlagMapInput";
import { MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput";
import { MoveFlagsUpsertWithoutFlagMapInput } from "../inputs/MoveFlagsUpsertWithoutFlagMapInput";
import { MoveFlagsWhereUniqueInput } from "../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.InputType("MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => MoveFlagsCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MoveFlagsCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MoveFlagsCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: MoveFlagsUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveFlagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}

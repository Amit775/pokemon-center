import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutFlagMapInput } from "../inputs/MoveCreateOrConnectWithoutFlagMapInput";
import { MoveCreateWithoutFlagMapInput } from "../inputs/MoveCreateWithoutFlagMapInput";
import { MoveUpdateToOneWithWhereWithoutFlagMapInput } from "../inputs/MoveUpdateToOneWithWhereWithoutFlagMapInput";
import { MoveUpsertWithoutFlagMapInput } from "../inputs/MoveUpsertWithoutFlagMapInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutFlagMapNestedInput", {})
export class MoveUpdateOneRequiredWithoutFlagMapNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutFlagMapInput, {
    nullable: true
  })
  create?: MoveCreateWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutFlagMapInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutFlagMapInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutFlagMapInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutFlagMapInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutFlagMapInput | undefined;
}

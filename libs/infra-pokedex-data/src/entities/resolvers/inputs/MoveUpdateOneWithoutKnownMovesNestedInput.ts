import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutKnownMovesInput } from "../inputs/MoveCreateOrConnectWithoutKnownMovesInput";
import { MoveCreateWithoutKnownMovesInput } from "../inputs/MoveCreateWithoutKnownMovesInput";
import { MoveUpdateToOneWithWhereWithoutKnownMovesInput } from "../inputs/MoveUpdateToOneWithWhereWithoutKnownMovesInput";
import { MoveUpsertWithoutKnownMovesInput } from "../inputs/MoveUpsertWithoutKnownMovesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneWithoutKnownMovesNestedInput", {})
export class MoveUpdateOneWithoutKnownMovesNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutKnownMovesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutKnownMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutKnownMovesInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  disconnect?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  delete?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutKnownMovesInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutKnownMovesInput | undefined;
}

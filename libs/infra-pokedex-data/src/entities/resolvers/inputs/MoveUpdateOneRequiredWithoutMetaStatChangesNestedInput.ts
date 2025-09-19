import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutMetaStatChangesInput } from "../inputs/MoveCreateOrConnectWithoutMetaStatChangesInput";
import { MoveCreateWithoutMetaStatChangesInput } from "../inputs/MoveCreateWithoutMetaStatChangesInput";
import { MoveUpdateToOneWithWhereWithoutMetaStatChangesInput } from "../inputs/MoveUpdateToOneWithWhereWithoutMetaStatChangesInput";
import { MoveUpsertWithoutMetaStatChangesInput } from "../inputs/MoveUpsertWithoutMetaStatChangesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutMetaStatChangesNestedInput", {})
export class MoveUpdateOneRequiredWithoutMetaStatChangesNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaStatChangesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutMetaStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutMetaStatChangesInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutMetaStatChangesInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutMetaStatChangesInput | undefined;
}

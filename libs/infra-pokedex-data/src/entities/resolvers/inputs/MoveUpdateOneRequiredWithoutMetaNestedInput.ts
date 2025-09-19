import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutMetaInput } from "../inputs/MoveCreateOrConnectWithoutMetaInput";
import { MoveCreateWithoutMetaInput } from "../inputs/MoveCreateWithoutMetaInput";
import { MoveUpdateToOneWithWhereWithoutMetaInput } from "../inputs/MoveUpdateToOneWithWhereWithoutMetaInput";
import { MoveUpsertWithoutMetaInput } from "../inputs/MoveUpsertWithoutMetaInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateOneRequiredWithoutMetaNestedInput", {})
export class MoveUpdateOneRequiredWithoutMetaNestedInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpsertWithoutMetaInput, {
    nullable: true
  })
  upsert?: MoveUpsertWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateToOneWithWhereWithoutMetaInput, {
    nullable: true
  })
  update?: MoveUpdateToOneWithWhereWithoutMetaInput | undefined;
}

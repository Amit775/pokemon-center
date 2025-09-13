import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaAilmentsCreateOrConnectWithoutMetaInput";
import { MoveMetaAilmentsCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentsCreateWithoutMetaInput";
import { MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput } from "../inputs/MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput";
import { MoveMetaAilmentsUpsertWithoutMetaInput } from "../inputs/MoveMetaAilmentsUpsertWithoutMetaInput";
import { MoveMetaAilmentsWhereInput } from "../inputs/MoveMetaAilmentsWhereInput";
import { MoveMetaAilmentsWhereUniqueInput } from "../inputs/MoveMetaAilmentsWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaAilmentsUpdateOneWithoutMetaNestedInput", {})
export class MoveMetaAilmentsUpdateOneWithoutMetaNestedInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaAilmentsCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaAilmentsCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpsertWithoutMetaInput, {
    nullable: true
  })
  upsert?: MoveMetaAilmentsUpsertWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  disconnect?: MoveMetaAilmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  delete?: MoveMetaAilmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaAilmentsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput, {
    nullable: true
  })
  update?: MoveMetaAilmentsUpdateToOneWithWhereWithoutMetaInput | undefined;
}

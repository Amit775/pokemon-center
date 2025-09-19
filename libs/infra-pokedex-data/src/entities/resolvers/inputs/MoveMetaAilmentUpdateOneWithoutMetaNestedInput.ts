import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateOrConnectWithoutMetaInput";
import { MoveMetaAilmentCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateWithoutMetaInput";
import { MoveMetaAilmentUpdateToOneWithWhereWithoutMetaInput } from "../inputs/MoveMetaAilmentUpdateToOneWithWhereWithoutMetaInput";
import { MoveMetaAilmentUpsertWithoutMetaInput } from "../inputs/MoveMetaAilmentUpsertWithoutMetaInput";
import { MoveMetaAilmentWhereInput } from "../inputs/MoveMetaAilmentWhereInput";
import { MoveMetaAilmentWhereUniqueInput } from "../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaAilmentUpdateOneWithoutMetaNestedInput", {})
export class MoveMetaAilmentUpdateOneWithoutMetaNestedInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaAilmentCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaAilmentCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentUpsertWithoutMetaInput, {
    nullable: true
  })
  upsert?: MoveMetaAilmentUpsertWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  disconnect?: MoveMetaAilmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  delete?: MoveMetaAilmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaAilmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentUpdateToOneWithWhereWithoutMetaInput, {
    nullable: true
  })
  update?: MoveMetaAilmentUpdateToOneWithWhereWithoutMetaInput | undefined;
}

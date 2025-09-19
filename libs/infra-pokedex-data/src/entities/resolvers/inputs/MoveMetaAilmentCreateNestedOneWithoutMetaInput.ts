import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateOrConnectWithoutMetaInput";
import { MoveMetaAilmentCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateWithoutMetaInput";
import { MoveMetaAilmentWhereUniqueInput } from "../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaAilmentCreateNestedOneWithoutMetaInput", {})
export class MoveMetaAilmentCreateNestedOneWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaAilmentCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaAilmentCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaAilmentWhereUniqueInput | undefined;
}

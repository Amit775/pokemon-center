import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentCreateWithoutMetaInput } from "../inputs/MoveMetaAilmentCreateWithoutMetaInput";
import { MoveMetaAilmentWhereUniqueInput } from "../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaAilmentCreateOrConnectWithoutMetaInput", {})
export class MoveMetaAilmentCreateOrConnectWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaAilmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaAilmentCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaAilmentCreateWithoutMetaInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryCreateWithoutMetaInput } from "../inputs/MoveMetaCategoryCreateWithoutMetaInput";
import { MoveMetaCategoryWhereUniqueInput } from "../inputs/MoveMetaCategoryWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCategoryCreateOrConnectWithoutMetaInput", {})
export class MoveMetaCategoryCreateOrConnectWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoryCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaCategoryCreateWithoutMetaInput;
}

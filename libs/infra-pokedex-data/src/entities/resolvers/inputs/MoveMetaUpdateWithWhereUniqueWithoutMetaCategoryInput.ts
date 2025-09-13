import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaUpdateWithoutMetaCategoryInput } from "../inputs/MoveMetaUpdateWithoutMetaCategoryInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput", {})
export class MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaUpdateWithoutMetaCategoryInput, {
    nullable: false
  })
  data!: MoveMetaUpdateWithoutMetaCategoryInput;
}

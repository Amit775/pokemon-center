import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TypeGameIndicesScalarWhereInput", {})
export class TypeGameIndicesScalarWhereInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereInput], {
    nullable: true
  })
  AND?: TypeGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereInput], {
    nullable: true
  })
  OR?: TypeGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesScalarWhereInput], {
    nullable: true
  })
  NOT?: TypeGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MoveFlagMapScalarWhereInput", {})
export class MoveFlagMapScalarWhereInput {
  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereInput], {
    nullable: true
  })
  AND?: MoveFlagMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereInput], {
    nullable: true
  })
  OR?: MoveFlagMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarWhereInput], {
    nullable: true
  })
  NOT?: MoveFlagMapScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_flag_id?: IntFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ContestCombosScalarWhereInput", {})
export class ContestCombosScalarWhereInput {
  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereInput], {
    nullable: true
  })
  AND?: ContestCombosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereInput], {
    nullable: true
  })
  OR?: ContestCombosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarWhereInput], {
    nullable: true
  })
  NOT?: ContestCombosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  first_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_move_id?: IntFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SuperContestCombosScalarWhereInput", {})
export class SuperContestCombosScalarWhereInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereInput], {
    nullable: true
  })
  AND?: SuperContestCombosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereInput], {
    nullable: true
  })
  OR?: SuperContestCombosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarWhereInput], {
    nullable: true
  })
  NOT?: SuperContestCombosScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  first_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_move_id?: IntFilter | undefined;
}

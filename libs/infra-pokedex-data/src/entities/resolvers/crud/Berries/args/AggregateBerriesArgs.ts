import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesOrderByWithRelationInput } from "../../../inputs/BerriesOrderByWithRelationInput";
import { BerriesWhereInput } from "../../../inputs/BerriesWhereInput";
import { BerriesWhereUniqueInput } from "../../../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesWhereInput, {
    nullable: true
  })
  where?: BerriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BerriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BerriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: BerriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

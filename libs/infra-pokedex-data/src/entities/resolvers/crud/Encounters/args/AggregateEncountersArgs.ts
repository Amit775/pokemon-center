import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersOrderByWithRelationInput } from "../../../inputs/EncountersOrderByWithRelationInput";
import { EncountersWhereInput } from "../../../inputs/EncountersWhereInput";
import { EncountersWhereUniqueInput } from "../../../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  where?: EncountersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncountersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncountersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncountersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

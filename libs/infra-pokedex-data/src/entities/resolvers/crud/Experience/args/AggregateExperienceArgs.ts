import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceOrderByWithRelationInput } from "../../../inputs/ExperienceOrderByWithRelationInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExperienceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExperienceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExperienceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
